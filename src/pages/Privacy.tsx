import Layout from '@/components/Layout'

const Privacy = () => (
  <Layout>
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-6">Privacy Policy</h1>
      <div className="bg-card rounded-xl border border-border p-6 shadow-xl backdrop-blur-md">
        <h2 className="text-xl font-semibold mb-4">1. Information Collection</h2>
        <p className="mb-4 text-muted-foreground">We only collect information necessary to provide and improve our service. No sensitive personal data is stored without your consent.</p>
        <h2 className="text-xl font-semibold mb-4">2. Data Usage</h2>
        <p className="mb-4 text-muted-foreground">Your data is used solely for the purpose of operating and enhancing the application. We do not sell or share your data with third parties.</p>
        <h2 className="text-xl font-semibold mb-4">3. Security</h2>
        <p className="mb-4 text-muted-foreground">We implement reasonable security measures to protect your information from unauthorized access.</p>
        {/* Tambahkan detail lain sesuai kebutuhan */}
      </div>
    </div>
    <div className="container mx-auto py-20 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-6">Terms of Policy</h1>
      <div className="bg-card rounded-xl border border-border p-6 shadow-xl backdrop-blur-md">
        <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4 text-muted-foreground">By accessing and using this application, you agree to comply with these terms and all applicable laws and regulations.</p>
        <h2 className="text-xl font-semibold mb-4">2. Use of Service</h2>
        <p className="mb-4 text-muted-foreground">You agree not to misuse the service or attempt to access it using a method other than the interface provided.</p>
        <h2 className="text-xl font-semibold mb-4">3. Changes to Terms</h2>
        <p className="mb-4 text-muted-foreground">We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon posting.</p>
        {/* Tambahkan detail lain sesuai kebutuhan */}
      </div>
    </div>
  </Layout>
)

export default Privacy
