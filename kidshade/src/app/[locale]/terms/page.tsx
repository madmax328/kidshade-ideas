export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Conditions Générales d&apos;Utilisation</h1>
      <p className="text-gray-400 text-sm mb-10">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Service</h2>
          <p className="text-gray-600">Kidshade est un service de génération d&apos;histoires personnalisées pour enfants, propulsé par l&apos;intelligence artificielle.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Utilisation acceptable</h2>
          <p className="text-gray-600">Le service est destiné aux parents et tuteurs pour créer des histoires pour enfants. Toute utilisation abusive est interdite.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Abonnements</h2>
          <p className="text-gray-600">L&apos;abonnement Premium est mensuel et peut être annulé à tout moment. Aucun remboursement pour les périodes entamées.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Contact</h2>
          <p className="text-gray-600">contact@kidshade.com</p>
        </section>
      </div>
    </div>
  );
}
