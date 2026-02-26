# 🚀 Kidshade — Guide de déploiement

## 1. Obtenir la clé API Anthropic (Claude)

1. Va sur **https://console.anthropic.com**
2. Crée un compte (gratuit, crédit offert)
3. Va dans **API Keys** → **Create Key**
4. Copie ta clé (commence par `sk-ant-api03-...`)

---

## 2. Configuration MongoDB Atlas

1. Va sur **https://cloud.mongodb.com**
2. Crée un cluster gratuit (M0)
3. Crée un utilisateur DB : **Database Access** → **Add New Database User**
4. Autorise ton IP : **Network Access** → **Allow Access from Anywhere** (pour Vercel)
5. Récupère l'URI : **Connect** → **Connect your application**
   → `mongodb+srv://user:password@cluster.mongodb.net/kidshade`

---

## 3. Configuration Stripe

1. Va sur **https://dashboard.stripe.com**
2. Mode **Test** d'abord !
3. Récupère tes clés dans **Developers** → **API keys**
4. Crée un produit Premium :
   - **Products** → **Add product**
   - Nom : "Kidshade Premium"
   - Prix : 2,99€ / mois (recurring)
   - Copie le **Price ID** (commence par `price_...`)
5. Configure le webhook :
   - **Developers** → **Webhooks** → **Add endpoint**
   - URL : `https://ton-domaine.vercel.app/api/stripe/webhook`
   - Événements : `checkout.session.completed`, `customer.subscription.*`
   - Copie le **Webhook secret** (commence par `whsec_...`)

---

## 4. Déploiement sur Vercel

1. Va sur **https://vercel.com**
2. **New Project** → Importe ce repo GitHub
3. Dans **Environment Variables**, ajoute :

```
MONGODB_URI=mongodb+srv://...
NEXTAUTH_SECRET=<générer avec: openssl rand -base64 32>
NEXTAUTH_URL=https://ton-projet.vercel.app
ANTHROPIC_API_KEY=sk-ant-api03-...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PREMIUM_PRICE_ID=price_...
NEXT_PUBLIC_APP_URL=https://ton-projet.vercel.app
```

4. **Deploy** !

---

## 5. Test en local

```bash
cd kidshade
cp .env.example .env.local
# Remplis .env.local avec tes vraies clés

npm install
npm run dev
# Ouvre http://localhost:3000
```

---

## 6. Domaine personnalisé (kidshade.com)

1. Dans Vercel : **Settings** → **Domains** → Ajoute `kidshade.com`
2. Chez ton registrar DNS : ajoute les enregistrements CNAME/A indiqués par Vercel
3. Met à jour `NEXTAUTH_URL` et `NEXT_PUBLIC_APP_URL` avec ton vrai domaine

---

## Structure des revenus

| Source | Montant | Quand |
|--------|---------|-------|
| Abonnement Premium | 2,99€/mois | Mensuel |
| Livre physique | 14,99€ | À la commande |
| Partenariats | Variable | Négocié |

**Marge livre physique :** ~7-8€ après impression (Lulu.com ou Printful)
