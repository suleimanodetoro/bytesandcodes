import { Shield, Mail, AlertCircle } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-primary-600" />
            <h1 className="text-5xl md:text-7xl font-bold text-primary-600">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl">
            We value your privacy and are committed to protecting your personal
            information. Learn more about how we collect, use, and safeguard
            your data.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          {/* Last Updated Banner */}
          <div className="bg-primary-50 rounded-lg p-4 flex items-center gap-3 mb-12">
            <AlertCircle className="text-primary-600" size={20} />
            <p className="text-sm text-secondary-600">
              Last updated:{" "}
              <span className="font-medium">October 27, 2024</span>
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-secondary-200 rounded-lg">
            <h2 className="text-xl font-bold text-secondary-900 mb-4">
              Contents
            </h2>
            <nav className="grid md:grid-cols-2 gap-4">
              {[
                "Interpretation and Definitions",
                "Collecting and Using Your Data",
                "Types of Data Collected",
                "Use of Your Personal Data",
                "Retention of Your Data",
                "Transfer of Your Data",
                "Disclosure of Your Data",
                "Security of Your Data",
                "Links to Other Websites",
                "Changes to this Policy",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              This Privacy Policy describes Our policies and procedures on the
              collection, use, and disclosure of Your information when You use
              the services provided by Bytes and Codes Initiative.
            </p>

            <h2
              id="interpretation-and-definitions"
              className="text-3xl font-bold text-secondary-900 mt-12 mb-6"
            >
              Interpretation and Definitions
            </h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
                Interpretation
              </h3>
              <p className="text-secondary-600">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>

              <h3 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
                Definitions
              </h3>
              <p className="text-secondary-600 mb-4">
                For the purposes of this Privacy Policy:
              </p>
              <ul className="space-y-4 text-secondary-600">
                <li className="flex gap-2">
                  <span className="font-semibold">Company</span> (referred to as
                  either "the Company", "We", "Us" or "Our" in this Agreement)
                  refers to Bytes and Codes Initiative.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Device</span> means any device
                  that can access the Service such as a computer, a cellphone,
                  or a digital tablet.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Personal Data</span> is any
                  information that relates to an identified or identifiable
                  individual.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Service</span> refers to the
                  services, website, or application provided by Bytes and Codes
                  Initiative.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Service Provider</span> means
                  any natural or legal person who processes the data on behalf
                  of the Company.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Usage Data</span> refers to
                  data collected automatically, either generated by the use of
                  the Service or from the Service infrastructure itself.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">You</span> means the
                  individual accessing or using the Service, or the company, or
                  other legal entity on behalf of which such individual is
                  accessing or using the Service, as applicable.
                </li>
              </ul>

              <h2
                id="collecting-and-using-your-data"
                className="text-3xl font-bold text-secondary-900 mt-12 mb-6"
              >
                Collecting and Using Your Personal Data
              </h2>

              <h3 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
                Types of Data Collected
              </h3>
              <p className="text-secondary-600 mb-4">
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li>First name and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Location details such as your address, city, or country</li>
                <li>
                  Any other data such as personal preferences, requirements, or
                  comments
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
                Use of Your Personal Data
              </h3>
              <p className="text-secondary-600 mb-4">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="space-y-4 text-secondary-600">
                <li className="flex gap-2">
                  <span className="font-semibold">
                    To provide and maintain our Service:
                  </span>{" "}
                  including to monitor the usage of our Service.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">To manage Your Account:</span>{" "}
                  to manage Your registration as a user of the Service.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">
                    For the performance of a contract:
                  </span>{" "}
                  the development, compliance, and undertaking of contracts.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">To contact You:</span> by
                  email, telephone calls, SMS, or other forms of electronic
                  communication.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">To provide updates:</span>{" "}
                  about other services or events which We offer.
                </li>
              </ul>

              <h2
                id="retention-of-your-data"
                className="text-3xl font-bold text-secondary-900 mt-12 mb-6"
              >
                Retention of Your Personal Data
              </h2>
              <p className="text-secondary-600">
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy.
              </p>

              <h2
                id="transfer-of-your-data"
                className="text-3xl font-bold text-secondary-900 mt-12 mb-6"
              >
                Transfer of Your Personal Data
              </h2>
              <p className="text-secondary-600">
                Your information may be transferred to — and maintained on —
                computers located outside of Your state, country, or other
                jurisdiction where data protection laws may differ from Your
                own.
              </p>

              <h2
                id="disclosure-of-your-data"
                className="text-3xl font-bold text-secondary-900 mt-12 mb-6"
              >
                Disclosure of Your Personal Data
              </h2>
              <p className="text-secondary-600 mb-4">
                We may disclose Your Personal Data under certain circumstances:
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li>To comply with legal obligations.</li>
                <li>To protect and defend Our rights or property.</li>
                <li>To prevent or investigate possible wrongdoing.</li>
                <li>To protect the personal safety of Users or the public.</li>
                <li>To protect against legal liability.</li>
              </ul>

              <h2
                id="security-of-your-data"
                className="text-3xl font-bold text-secondary-900 mt-12 mb-6"
              >
                Security of Your Personal Data
              </h2>
              <p className="text-secondary-600">
                While We strive to use commercially acceptable means to protect
                Your Personal Data, We cannot guarantee its absolute security.
              </p>

              <h2
                id="links-to-other-websites"
                className="text-3xl font-bold text-secondary-900 mt-12 mb-6"
              >
                Links to Other Websites
              </h2>
              <p className="text-secondary-600">
                Our Service may contain links to other websites. We have no
                control over and assume no responsibility for the content or
                practices of any third-party sites.
              </p>

              <h2
                id="changes-to-this-policy"
                className="text-3xl font-bold text-secondary-900 mt-12 mb-6"
              >
                Changes to this Privacy Policy
              </h2>
              <p className="text-secondary-600">
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page.
              </p>
            </div>

            {/* Contact Section */}
            <div className="my-12 p-8 bg-primary-50 rounded-lg">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact Us
              </h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please
                don't hesitate to contact us.
              </p>
              <a
                href="mailto:info@bytesandcodes.com"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 
                         transition-colors font-medium"
              >
                <Mail size={20} />
                info@bytesandcodes.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
