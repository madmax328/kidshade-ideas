import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-warm flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Page introuvable</h1>
        <p className="text-gray-500 mb-8 text-lg">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold hover:opacity-90 transition-opacity"
        >
          <Sparkles className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
