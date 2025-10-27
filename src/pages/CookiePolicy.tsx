import Layout from "@/components/Layout";

const CookiePolicy = () => (
  <Layout>
    <div className="container mx-auto py-20 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-6">Cookie Policy</h1>
      <div className="bg-card rounded-xl border border-border p-6 shadow-xl backdrop-blur-md">
        <h2 className="text-xl font-semibold mb-4">1. What are Cookies?</h2>
        <p className="mb-4 text-muted-foreground">
          Cookies are small text files stored on your device to help us improve
          your experience and analyze usage of our service.
        </p>
        <h2 className="text-xl font-semibold mb-4">2. How We Use Cookies</h2>
        <p className="mb-4 text-muted-foreground">
          We use cookies to remember your preferences, keep you logged in, and
          collect analytics data. No personal information is stored in cookies.
        </p>
        <h2 className="text-xl font-semibold mb-4">3. Managing Cookies</h2>
        <p className="mb-4 text-muted-foreground">
          You can manage or delete cookies in your browser settings. By using
          our service, you consent to our use of cookies as described.
        </p>
        <h2 className="text-xl font-semibold mb-4">
          4. Types of Cookies We Use
        </h2>
        <p className="mb-4 text-muted-foreground">
          <strong>Strictly Necessary Cookies:</strong> These are essential for
          the website to function properly. They are usually set in response to
          actions made by you, such as logging in, setting your privacy
          preferences, or filling in forms. You cannot opt-out of these cookies.
        </p>
        <p className="mb-4 text-muted-foreground">
          <strong>Performance and Analytics Cookies:</strong> These cookies
          allow us to count visits and traffic sources so we can measure and
          improve the performance of our site. They help us understand which
          pages are popular and how visitors move around the site. All
          information these cookies collect is aggregated and therefore
          anonymous.
        </p>
        <p className="mb-4 text-muted-foreground">
          <strong>Functionality Cookies:</strong> These cookies enable the
          website to provide enhanced functionality and personalization. They
          may be set by us or by third-party providers whose services we have
          added to our pages. If you do not allow these cookies, some or all of
          these services may not function properly.
        </p>
        <p className="mb-4 text-muted-foreground">
          <strong>Targeting and Advertising Cookies:</strong> These cookies may
          be set through our site by our advertising partners. They may be used
          by those companies to build a profile of your interests and show you
          relevant advertisements on other sites. They do not store directly
          personal information but are based on uniquely identifying your
          browser and internet device.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Third-Party Cookies</h2>
        <p className="mb-4 text-muted-foreground">
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the service, deliver
          advertisements, and so on. For example, we use Google Analytics to
          help us understand how you use the site. These third-party services
          have their own cookie policies.
        </p>

        <h2 className="text-xl font-semibold mb-4">6. Cookie Duration</h2>
        <p className="mb-4 text-muted-foreground">
          <strong>Session Cookies:</strong> These are temporary cookies that are
          deleted from your device when you close your web browser.
        </p>
        <p className="mb-4 text-muted-foreground">
          <strong>Persistent Cookies:</strong> These cookies remain on your
          device for a set period or until you manually delete them. They are
          used to remember your preferences for future visits.
        </p>

        <h2 className="text-xl font-semibold mb-4">
          7. Changes to This Cookie Policy
        </h2>
        <p className="mb-4 text-muted-foreground">
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any significant changes by posting the
          new policy on this page.
        </p>

        <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
        <p className="mb-4 text-muted-foreground">
          If you have any questions about our use of cookies or this policy,
          please contact us at: [Masukkan Alamat Email Kontak Anda]
        </p>
      </div>
    </div>
  </Layout>
);

export default CookiePolicy;
