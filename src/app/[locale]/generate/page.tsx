import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import StoryGenerator from '@/components/StoryGenerator';
import { Sparkles } from 'lucide-react';

export default async function GeneratePage() {
  const session = await getServerSession(authOptions);

  let storiesLeft = 5;
  let isPremium = false;

  if (session?.user) {
    await connectToDatabase();
    const user = await User.findById((session.user as { id: string }).id);
    if (user) {
      isPremium = user.plan === 'premium';
      storiesLeft = Math.max(0, 5 - user.storiesUsedThisMonth);
    }
  }

  return (
    <div className="min-h-screen gradient-warm py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-purple-100 rounded-full text-sm font-medium text-purple-700 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            Générateur d&apos;histoires
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Crée une histoire{' '}
            <span className="gradient-text">magique</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Ton enfant sera le héros d&apos;une aventure unique, générée en 30 secondes par l&apos;IA.
          </p>
        </div>

        <StoryGenerator storiesLeft={storiesLeft} isPremium={isPremium} />

        {/* Examples */}
        <div className="mt-10 grid grid-cols-3 gap-3">
          {[
            { emoji: '🐉', label: 'Emma et les Dragons' },
            { emoji: '🚀', label: 'Lucas dans l\'Espace' },
            { emoji: '🌊', label: 'Sofia et les Dauphins' },
          ].map((ex) => (
            <div key={ex.label} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
              <div className="text-3xl mb-2">{ex.emoji}</div>
              <p className="text-xs font-medium text-gray-600">{ex.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
