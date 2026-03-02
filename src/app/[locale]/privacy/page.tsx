export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Politique de Confidentialité</h1>
      <p className="text-gray-400 text-sm mb-10">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Données collectées</h2>
          <p className="text-gray-600">Nous collectons : nom, email, histoires créées. Nous ne collectons jamais de données sur vos enfants au-delà du prénom et de l&apos;âge que vous fournissez pour la génération d&apos;histoires.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Utilisation</h2>
          <p className="text-gray-600">Vos données sont utilisées uniquement pour fournir le service Kidshade et améliorer notre application. Nous ne vendons jamais vos données.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Contact</h2>
          <p className="text-gray-600">Pour toute question : contact@kidshade.com</p>
        </section>
      </div>
    </div>
  );
}
