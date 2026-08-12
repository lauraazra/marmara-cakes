import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function TanyaAI() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastMsgCount, setLastMsgCount] = useState(1);

  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Halo! Saya Mara AI, asisten virtual Marmara Cakes. Ada yang bisa saya bantu seputar kue atau informasi toko kami hari ini?",
    },
  ]);

  const chatContainerRef = useRef(null);
  const lastMessageRef = useRef(null);

  const scrollToTopNewMessage = () => {
    if (chatContainerRef.current && lastMessageRef.current) {
      const container = chatContainerRef.current;
      const targetElement = lastMessageRef.current;

      const topPos = targetElement.offsetTop - container.offsetTop;

      container.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (messages.length > lastMsgCount) {
      scrollToTopNewMessage();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLastMsgCount(messages.length);
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const userQuestion = query;
    setQuery("");

    const newMessages = [...messages, { role: "user", text: userQuestion }];
    setMessages(newMessages);
    setLoading(true);

    const filteredMessages = messages.filter(
      (msg, index) => !(index === 0 && msg.role === "model"),
    );

    const formattedHistory = filteredMessages.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    try {
      const response = await fetch("/api/tanya-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userQuestion,
          history: formattedHistory,
        }),
      });

      const data = await response.json();

      setMessages([
        ...newMessages,
        {
          role: "model",
          text:
            data.reply ||
            "Mohon maaf, Mara belum berhasil menemukan informasi tersebut.",
        },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "model",
          text: "Mohon maaf yang sebesar-besarnya, saat ini koneksi ke sistem Mara sedang terputus.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="bg-card-site p-4 sm:p-6 rounded-xl shadow-lg mb-6 border border-border-site flex flex-col h-130">
        <div className="flex items-center mb-4 pb-3 border-b border-border-site/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-marmara-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
            />
          </svg>
          <h3 className="text-xl font-bold ml-2 text-text-site">
            Tanya Mara AI
          </h3>
        </div>

        <div
          className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4"
          ref={chatContainerRef}
        >
          {messages.map((msg, index) => {
            const isLastUserMessage =
              msg.role === "user" &&
              index === messages.findLastIndex((m) => m.role === "user");

            return (
              <div
                key={index}
                ref={isLastUserMessage ? lastMessageRef : null}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-site/50 mb-1 px-1">
                  {msg.role === "user" ? "Anda" : "Mara AI"}
                </span>
                <div
                  className={`pt-3.5 px-3.5 rounded-xl text-sm sm:text-base max-w-[85%]  ${
                    msg.role === "user"
                      ? "dark:bg-marmara-deep-teal border border-border-site text-white rounded-br-none"
                      : "bg-site border border-border-site text-text-site rounded-bl-none shadow-xs"
                  }`}
                >
                  <div
                    className="max-w-none prose dark:prose-invert 
                    prose-p:m-0 prose-p:p-0 
                    prose-ul:m-0 prose-ul:p-0 
                    prose-li:m-0 prose-li:p-0 
                    prose-headings:m-0 
                    leading-relaxed"
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-site/50 mb-1 px-1">
                Mara AI
              </span>
              <div className="bg-site border border-border-site text-text-site p-3.5 rounded-xl rounded-bl-none italic text-sm animate-pulse">
                Mara sedang menyiapkan jawaban...
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center mt-2"
        >
          <input
            type="text"
            placeholder="Ketik pertanyaan seputar kue di sini..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
            className="w-full pl-4 pr-24 py-3 text-sm sm:text-base text-zinc-700 bg-white border border-border-site rounded-lg focus:outline-none focus:ring-2 focus:ring-marmara-teal"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-2 bg-marmara-teal text-white font-bold py-2 px-4 rounded-md hover:bg-marmara-deepTeal transition-all duration-300 disabled:bg-zinc-300 disabled:cursor-not-allowed text-xs sm:text-sm"
          >
            {loading ? "..." : "Kirim"}
          </button>
        </form>
      </div>
    </div>
  );
}
