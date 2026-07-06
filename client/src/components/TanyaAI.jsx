import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function TanyaAI() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentQA, setCurrentQA] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const userQuestion = query;
    setQuery("");
    setLoading(true);

    setCurrentQA({
      question: userQuestion,
      answer:
        "Mohon tunggu sebentar ya, Mara sedang menyiapkan jawaban terbaik untuk Anda...",
      isSearching: true,
    });

    try {
      const response = await fetch("/api/tanya-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userQuestion }),
      });

      const data = await response.json();

      setCurrentQA({
        question: userQuestion,
        answer:
          data.reply ||
          "Mohon maaf, Mara belum berhasil menemukan informasi tersebut saat ini. Ada hal lain yang bisa Mara bantu?",
        isSearching: false,
      });
    } catch {
      setCurrentQA({
        question: userQuestion,
        answer:
          "Mohon maaf yang sebesar-besarnya, saat ini koneksi ke sistem Mara sedang terputus. Silakan coba beberapa saat lagi ya.",
        isSearching: false,
      });
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* Form Input Section */}
      <div className="bg-card-site p-4 sm:p-6 rounded-xl shadow-lg mb-6 border border-border-site">
        <div className="flex items-center mb-4">
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

        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            type="text"
            placeholder="Halo Mara, berapa harga kue Special Eid Cookies?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
            className="w-full pl-4 pr-24 py-3.5 text-sm sm:text-base text-zinc-700 bg-white border border-border-site rounded-lg focus:outline-none focus:ring-2 focus:ring-marmara-teal min-h-12"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-2 bg-marmara-teal text-white font-bold py-2 px-5 rounded-md hover:bg-marmara-deepTeal transition-all duration-300 disabled:bg-zinc-300 disabled:cursor-not-allowed text-xs sm:text-sm min-h-9"
          >
            {loading ? "..." : "Tanya"}
          </button>
        </form>
      </div>

      {/* Result Display Section */}
      {currentQA && (
        <div className="bg-card-site border border-border-site rounded-xl p-5 shadow-sm mb-12">
          <div className="mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-text-site/50 block mb-1">
              Pertanyaan Anda:
            </span>
            <p className="text-sm sm:text-base font-semibold text-text-site">
              "{currentQA.question}"
            </p>
          </div>

          <hr className="border-border-site/30 my-3" />

          <div>
            <span
              className={`text-[11px] font-bold uppercase tracking-wider block mb-2 ${currentQA.isSearching ? "text-text-site" : "text-text-secondary"}`}
            >
              Jawaban Mara AI:
            </span>

            <div
              className={`prose dark:prose-invert max-w-none text-sm sm:text-base text-text-site leading-relaxed ${currentQA.isSearching ? "italic animate-pulse text-text-secondary/70" : ""}`}
            >
              <ReactMarkdown>{currentQA.answer}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
