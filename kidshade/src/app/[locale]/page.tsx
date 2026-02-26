import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Sparkles, BookOpen, Mic, Printer, Globe, Star, ArrowRight, Wand2, Heart, Shield } from 'lucide-react';
import StoryGenerator from '@/components/StoryGenerator';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('hero');
  const tGen = useTranslations('generator');

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden gradient-warm min-h-[90vh] flex items-center">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-200 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-purple-100 rounded-full text-sm font-medium text-purple-700 shadow-sm mb-8">
                <Sparkles className="w-4 h-4 text-purple-500" />
                {t('badge')}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                {t('title')}{' '}
                <span className="gradient-text block">{t('titleHighlight')}</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                {t('subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href={`/${locale}/auth/signup`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold gradient-primary hover:opacity-90 transition-all shadow-lg shadow-purple-200 text-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  {t('cta')}
                </Link>
                <Link
                  href={`/${locale}/pricing`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-gray-700 font-semibold bg-white border border-gray-200 hover:border-purple-200 transition-all text-lg"
                >
                  {t('ctaSecondary')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex -space-x-2">
                  {['👩', '👨', '👩‍🦱', '👨‍🦰', '👩‍🦳'].map((emoji, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-orange-100 border-2 border-white flex items-center justify-center text-lg">
                      {emoji}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>+12 000</strong> {t('stats.families')} · <strong>42</strong> {t('stats.countries')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Generator */}
            <div>
              <StoryGenerator />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              En 3 étapes simples, créez une aventure unique pour votre enfant
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-purple-200 to-orange-200" />

            {[
              { icon: Wand2, step: '01', title: 'Remplis le formulaire', desc: 'Prénom, âge, thème préféré. 30 secondes chrono !', color: 'from-purple-100 to-purple-50', iconColor: 'text-purple-600' },
              { icon: Sparkles, step: '02', title: 'L\'IA crée la magie', desc: 'Notre IA génère une histoire unique où ton enfant est le héros.', color: 'from-pink-100 to-pink-50', iconColor: 'text-pink-600' },
              { icon: BookOpen, step: '03', title: 'Lis & commande', desc: 'Lis l\'histoire avec ton enfant. Commande un vrai livre si tu veux !', color: 'from-orange-100 to-orange-50', iconColor: 'text-orange-600' },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-sm`}>
                  <item.icon className={`w-10 h-10 ${item.iconColor}`} />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-primary text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-24 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Tout ce dont vous avez besoin
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: 'IA Personnalisée', desc: 'Chaque histoire est unique. Votre enfant est toujours le héros !', color: 'text-purple-600 bg-purple-50' },
              { icon: Globe, title: '5 Langues', desc: 'Français, anglais, espagnol, portugais, allemand. Le monde entier !', color: 'text-blue-600 bg-blue-50' },
              { icon: Mic, title: 'Lecture Audio', desc: 'Faites lire l\'histoire à voix haute avec notre TTS premium.', color: 'text-green-600 bg-green-50' },
              { icon: Printer, title: 'Vrai Livre', desc: 'Commandez votre histoire imprimée et reliée. Cadeau parfait !', color: 'text-orange-600 bg-orange-50' },
              { icon: Heart, title: '10 Thèmes', desc: 'Dragons, espace, pirates, fées... Des aventures pour tous les goûts !', color: 'text-red-600 bg-red-50' },
              { icon: Shield, title: '100% Sûr', desc: 'Contenu adapté aux enfants, sans publicité, sans violence.', color: 'text-teal-600 bg-teal-50' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-50">
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Les parents adorent Kidshade ❤️
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Marie L.', avatar: '👩', country: '🇫🇷', text: 'Ma fille Emma pleure quand je lui annonce que c\'est l\'heure de dormir... sauf maintenant qu\'elle sait qu\'il y a une nouvelle histoire avec elle en héroïne !', stars: 5 },
              { name: 'Carlos M.', avatar: '👨', country: '🇪🇸', text: 'Increíble. Mi hijo Lucas no quería leer, ahora pide cuentos de Kidshade tous les soirs. Ha mejorado su lectura muchísimo.', stars: 5 },
              { name: 'Sophie K.', avatar: '👩‍🦱', country: '🇩🇪', text: 'Wir haben das Buch als Geschenk für Oma bestellt. Sie hat geweint vor Rührung. Perfektes Geschenk!', stars: 5 },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section className="py-20 gradient-primary">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Prêt à créer la magie ? ✨
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Rejoignez +12 000 familles et créez votre première histoire gratuite en 30 secondes.
          </p>
          <Link
            href={`/${locale}/auth/signup`}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-purple-700 font-bold text-lg hover:bg-purple-50 transition-colors shadow-xl"
          >
            <Sparkles className="w-5 h-5" />
            Commencer gratuitement
          </Link>
          <p className="mt-4 text-purple-200 text-sm">Aucune carte bancaire requise</p>
        </div>
      </section>
    </>
  );
}
