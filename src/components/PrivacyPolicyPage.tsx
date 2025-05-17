"use client";
import PolicySection from "./PolicySection";
import DefinitionItem from "./DefinitionItem";
import InfoCard from "./InfoCard";
import UseInfoItem from "./UseInfoItem";
import { useState } from "react";

function PrivacyPolicyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white pb-[532px] max-md:pb-24">
      <div className="w-full max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="hidden max-md:flex items-center p-2 text-white bg-sky-700 rounded-lg hover:bg-sky-600 focus:outline-none fixed top-4 right-4 z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Left Navigation Menu */}
          <aside className={`w-1/4 bg-sky-700 p-6 min-h-screen sticky top-0 
            max-md:w-full max-md:min-h-0 max-md:fixed max-md:left-0 max-md:right-0 max-md:z-40 max-md:transition-transform max-md:duration-300 max-md:ease-in-out
            ${isMenuOpen ? 'max-md:translate-y-0' : 'max-md:-translate-y-full'}`}>
            <h2 className="text-white text-2xl font-bold mb-6 border-b border-sky-500 pb-3">Table of Contents</h2>
            <nav>
              <ul className="space-y-3">
                {[
                  { href: '#background', text: 'Background' },
                  { href: '#definitions', text: 'Definitions' },
                  { href: '#collection', text: 'Collection of Information' },
                  { href: '#use', text: 'Use of Information' },
                  { href: '#disclosure', text: 'Disclosure and Transfer' },
                  { href: '#cookies', text: 'Cookies & Tracking' },
                  { href: '#security', text: 'Data Security' },
                  { href: '#retention', text: 'Data Retention' },
                  { href: '#rights', text: 'Your Rights' },
                  { href: '#changes', text: 'Changes to Privacy Policy' },
                  { href: '#grievance', text: 'Grievance Officer' },
                  { href: '#contact', text: 'Contact Us' }
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-white hover:bg-sky-600 rounded-lg transition-all duration-200 font-medium text-lg"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="w-3/4 max-md:w-full max-md:px-4">
            <div className="flex flex-col w-full max-md:max-w-full">
              <article className="prose prose-lg max-w-none">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e93d23eae3a0b70ccaef29ad6a5cc31bf2ac8207?placeholderIfAbsent=true"
                  alt="Privacy Policy Banner"
                  className="object-contain self-stretch w-full aspect-[2.35] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full"
                />

                <section id="background">
                  <PolicySection
                    title="BACKGROUND"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d2cb66f6ca71497536f0011ac7874c00a937fa46?placeholderIfAbsent=true"
                  />

                  <p className="self-stretch mt-8 mr-7 ml-3 text-lg font-medium leading-7 text-zinc-600 max-md:mr-2.5 max-md:ml-2.5 max-md:text-base">
                    This Privacy Policy is formulated in compliance with Section
                    43A of the Information Technology Act, 2000 and the
                    Information Technology (Reasonable Security Practices and
                    Procedures and Sensitive Personal Data or Information) Rules,
                    2011. It governs the handling of personal and sensitive
                    personal data or information (SPDI) by Agrim Fincap Private
                    Limited ("Agrim" or "the Company") in the course of its
                    business operations.
                  </p>

                  <p className="self-stretch mt-2 mr-9 ml-3 text-lg font-medium leading-7 text-zinc-600 max-md:mr-2.5 max-md:max-w-full">
                    The Company commits to ensure the lawful, fair, and
                    transparent processing of information received from or about
                    its users, customers, or partners
                  </p>

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/267e8ffb0c73b2df22cb4075254957db24297784?placeholderIfAbsent=true"
                    alt="Divider"
                    className="object-contain mt-11 max-w-full aspect-[2.7] w-[894px] max-md:mt-10"
                  />
                </section>

                <section id="definitions" className="max-md:px-2.5">
                  <PolicySection
                    title="DEFINITIONS"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4d41c72c638f44b1c2342b175ac39ce0df149f?placeholderIfAbsent=true"
                  />

                  <section className="mt-10 ml-3 max-w-full w-[898px]">
                    <DefinitionItem
                      number="01"
                      title="Personal Information"
                      description="Information that relates to a natural person and is capable of identifying such person either directly or indirectly."
                    />

                    <DefinitionItem
                      number="02"
                      title="Sensitive Personal Data or Information (SPDI)"
                      description="Includes financial data, passwords, biometric details, health data, etc., as defined under applicable law."
                    />

                    <DefinitionItem
                      number="03"
                      title="Data Subject"
                      description="Any individual whose data is collected or processed by Agrim."
                    />

                    <DefinitionItem
                      number="04"
                      title="Data Controller"
                      description="Agrim Fincap Private Limited, which determines the means and purpose of processing data."
                    />

                    <DefinitionItem
                      number="05"
                      title="Data Processor"
                      description="Any third party that processes data on behalf of the Company."
                    />

                    <DefinitionItem
                      number="06"
                      title="Processing"
                      description="Any operation performed on personal data (e.g., collection, storage, use, disclosure, deletion)."
                    />

                    <DefinitionItem
                      number="07"
                      title="Third Party"
                      description="Any individual or entity other than the Data Subject or Agrim, who may receive or handle data."
                    />

                    <DefinitionItem
                      number="08"
                      title="Profiling"
                      description="Automated processing of data to assess or predict aspects like creditworthiness or risk."
                    />

                    <DefinitionItem
                      number="09"
                      title="Know Your Customer (KYC)"
                      description="The process of verifying a customer's identity and assessing their risk profile to prevent financial crime and ensure services are not misused. It includes ongoing monitoring and information updates."
                    />
                  </section>
                </section>

                <section id="collection">
                  <PolicySection
                    title="COLLECTION OF INFORMATION"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d54b9ffbde1c7d58a30df07e767e2d01e86936ec?placeholderIfAbsent=true"
                  />

                  <p className="mt-8 text-lg font-medium leading-7 text-neutral-600 w-[916px] max-md:max-w-full">
                    While you use our services or Site, AFPL may collect and process
                    various types of information, including sensitive data:
                  </p>

                  <div className="mt-8 max-w-full w-[934px]">
                    <div className="flex gap-5 max-md:flex-col">
                      <InfoCard imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/fe1a64d911747ee11f9c11166d155ac93d51d739?placeholderIfAbsent=true" />
                      <InfoCard imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/922712b791cb554ea29daedab77d7ac6097aef5a?placeholderIfAbsent=true" />
                      <InfoCard imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cbd5c2835a07eeab02f5e798ef85414e0884a3cb?placeholderIfAbsent=true" />
                      <InfoCard imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c06eb784e93595070bc6d093a1ed17c7f17575d5?placeholderIfAbsent=true" />
                    </div>
                  </div>

                  <div className="mt-8 max-w-full w-[939px]">
                    <div className="flex gap-5 max-md:flex-col">
                      <InfoCard imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/68ee5aa373ca650be9f9cc8a21a67742583ff4ce?placeholderIfAbsent=true" />
                      <InfoCard imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/26bd535aa411afe209311dd500171076cbeeaded?placeholderIfAbsent=true" />
                      <InfoCard imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a06c71354bc34e1a326e0fc1920a992d360f0480?placeholderIfAbsent=true" />
                      <InfoCard imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/41c8fdfdee2bbe2a40870069d86840fed79b7a29?placeholderIfAbsent=true" />
                    </div>
                  </div>
                </section>

                <section id="use" className="max-md:px-2.5">
                  <PolicySection
                    title="USE OF INFORMATION"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbc437316a03da06cad4bbdeff8bfae7caf3ac?placeholderIfAbsent=true"
                  />

                  <p className="self-start mt-7 ml-28 text-lg font-medium leading-none text-neutral-600 max-md:max-w-full">
                    The information collected by us is used in various ways to:
                  </p>

                  <div className="flex flex-col items-center mt-8 max-w-full w-[922px]">
                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cf64b803639298a11a8094511e02e4e46d8bae01?placeholderIfAbsent=true"
                      text="To facilitate assessment and provide credit underwriting support for sanction of credit facility."
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a00dffdcfe147d02578da7f52f5fe05be6d6e0fa?placeholderIfAbsent=true"
                    />

                    <div className="flex relative flex-col items-start mt-3 w-full rounded-none min-h-[78px] max-md:pr-5">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa2fbcb4ce476064e18fef37ac5e87135383ccc?placeholderIfAbsent=true"
                        alt="Background"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/929b919f5f47526dfc517a178582eb644193a12d?placeholderIfAbsent=true"
                        alt="Icon"
                        className="object-contain aspect-square w-[78px]"
                      />
                    </div>

                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b17ab2079be77a6c82b552c343916a9dd314d67f?placeholderIfAbsent=true"
                      text="To inform you about new offers, products, services from time to time."
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a00dffdcfe147d02578da7f52f5fe05be6d6e0fa?placeholderIfAbsent=true"
                    />

                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/972c913119d0727870b63c473700f2d1ce401de0?placeholderIfAbsent=true"
                      text="To resolve disputes, troubleshoot concerns."
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a00dffdcfe147d02578da7f52f5fe05be6d6e0fa?placeholderIfAbsent=true"
                    />

                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d6262e91490872360b6ba79307fef1a142cb718?placeholderIfAbsent=true"
                      text="To help and promote safe services."
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a00dffdcfe147d02578da7f52f5fe05be6d6e0fa?placeholderIfAbsent=true"
                    />

                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/baaf24913000cae403642c23f51945ea0edb088d?placeholderIfAbsent=true"
                      text="To Provide, operate and maintain our website"
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a00dffdcfe147d02578da7f52f5fe05be6d6e0fa?placeholderIfAbsent=true"
                    />

                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e09c49009e6b0803ec6dcff6fb88a932b926bb?placeholderIfAbsent=true"
                      text="To Improve, personalize and expand our website."
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a00dffdcfe147d02578da7f52f5fe05be6d6e0fa?placeholderIfAbsent=true"
                    />

                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2d568ecb68db06f2dd824c45966746a7a2470c93?placeholderIfAbsent=true"
                      text="To Develop new products and services, features, and functionalities."
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a00dffdcfe147d02578da7f52f5fe05be6d6e0fa?placeholderIfAbsent=true"
                    />

                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d517bab1fae9ee858f05f45c927b6aaacaf161e5?placeholderIfAbsent=true"
                      text="Communicate either directly with you or through one of our partners to provide you with customer service, with updates and other website-related information, and for marketing and promotional purposes."
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7baa24aecaa2eac41b7d3b053c5b04d5d9e13fae?placeholderIfAbsent=true"
                      isLarge={true}
                    />

                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/733fb82f0171ad7de44147fb7e04cb9776253620?placeholderIfAbsent=true"
                      text="To Send you emails"
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a00dffdcfe147d02578da7f52f5fe05be6d6e0fa?placeholderIfAbsent=true"
                    />

                    <UseInfoItem
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f09e1875e9180b186f631e91cded59864dba855d?placeholderIfAbsent=true"
                      text="To protect and prevent fraud and other criminal activity"
                      bubbleImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a00dffdcfe147d02578da7f52f5fe05be6d6e0fa?placeholderIfAbsent=true"
                    />
                  </div>
                </section>

                <section id="disclosure" className="max-md:px-2.5">
                  <PolicySection
                    title="DISCLOSURE AND TRANSFER OF INFORMATION"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d03ef235975167fcf295ef37ade19e6b2b138aae?placeholderIfAbsent=true"
                  />

                  <p className="self-start mt-7 ml-32 text-lg font-medium leading-none text-neutral-600 max-md:max-w-full">
                    We may disclose data under the following controlled circumstances:
                  </p>

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f650259048b8a20811cd884ee6859075a5d2f715?placeholderIfAbsent=true"
                    alt="Disclosure Information"
                    className="object-contain mt-9 max-w-full rounded-none aspect-[1.11] w-[879px]"
                  />

                  <div className="overflow-hidden px-3.5 py-2 mt-16 max-w-full text-lg font-medium leading-none bg-stone-50 text-neutral-600 w-[869px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <span className="text-red-600">**</span> We do not sell or rent your
                    personal data to any third party.
                  </div>
                </section>

                <section id="cookies" className="max-md:px-2.5">
                  <PolicySection
                    title="COOKIES, WEB BEACONS AND TRACKING TECHNOLOGIES"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d527b4de965766fb89512ce1cd52970732103cb1?placeholderIfAbsent=true"
                  />

                  <div className="pl-9 mt-8 w-full max-md:pl-5 max-md:max-w-full">
                    <p className="mr-14 text-lg font-medium leading-7 text-zinc-600 max-md:mr-2.5 max-md:max-w-full">
                      This Privacy Policy is formulated in compliance with Section
                      43A of the Information Technology Act, 2000 and the
                      Information Technology (Reasonable Security Practices and
                      Procedures and Sensitive Personal Data or Information)
                      Rules, 2011. It governs the handling of personal and
                      sensitive personal data or information (SPDI) by Agrim
                      Fincap Private Limited ("Agrim" or "the Company") in the
                      course of its business operations.
                    </p>

                    <div className="mt-6 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        <div className="w-[70%] max-md:ml-0 max-md:w-full">
                          <p className="mr-0 text-lg font-medium leading-7 text-zinc-600 max-md:max-w-full">
                            The Company commits to ensure the lawful, fair, and
                            transparent processing of information received from or
                            about its users, customers, or partners
                          </p>
                        </div>
                        <div className="ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25b6273f4cf52011b05cdc22f776fd5c1d79967c?placeholderIfAbsent=true"
                            alt="Cookies Illustration"
                            className="object-contain grow mt-12 w-full aspect-[1.14] max-md:mt-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="security" className="max-md:px-2.5">
                  <PolicySection
                    title="DATA SECURITY"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d88e3e4f1c6c0850cf33a8fbe57fd93b9490e9f2?placeholderIfAbsent=true"
                  />

                  <p className="mt-5 ml-8 text-lg font-medium leading-none text-neutral-600 max-md:max-w-full">
                    Agrim implements a comprehensive security program to safeguard
                    information. Our measures include:
                  </p>

                  <DataSecuritySection />

                  <div className="overflow-hidden px-5 py-2 mt-16 max-w-full text-lg font-medium leading-none bg-stone-50 text-neutral-600 w-[869px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <span className="text-red-600">**</span> In the event of a breach,
                    affected users will be notified as per applicable legal requiremts.
                  </div>
                </section>

                <section id="retention" className="max-md:px-2.5">
                  <PolicySection
                    title="DATA RETENTION"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/49d5529a2bd4dcda12ef1230e47b3bcabf8fc0ed?placeholderIfAbsent=true"
                  />

                  <p className="self-start mt-5 ml-36 text-lg font-medium leading-none text-neutral-600 max-md:ml-2.5">
                    We retain personal information for as long as:
                  </p>

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c333af926475cea59534a0c815932a4e5bd6965?placeholderIfAbsent=true"
                    alt="Data Retention Information"
                    className="object-contain mt-8 ml-3.5 max-w-full rounded-none aspect-[2.58] w-[869px]"
                  />

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/772a64c2d61afb25801d22c5353a0bb9199998fe?placeholderIfAbsent=true"
                    alt="Additional Information"
                    className="object-contain mt-20 max-w-full rounded-none aspect-[1.23] w-[901px] max-md:mt-10"
                  />

                  <div className="flex overflow-hidden flex-wrap gap-4 px-3.5 pt-2.5 pb-5 mt-14 ml-8 max-w-full text-lg font-medium bg-stone-50 w-[898px] max-md:mt-10">
                    <span className="self-start leading-none text-red-600">**</span>
                    <p className="flex-auto leading-7 text-neutral-600 w-[836px] max-md:max-w-full">
                      You may withdraw consent by contacting our Grievance Officer at
                      amit@agrimfincap.com. Withdrawal may result in limited or
                      discontinued service access.
                    </p>
                  </div>
                </section>

                <section id="rights" className="max-md:px-2.5">
                  <PolicySection
                    title="YOUR RIGHTS"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d527b4de965766fb89512ce1cd52970732103cb1?placeholderIfAbsent=true"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1674bf419d777a34567ce58d6d6f5c32aef5b994?placeholderIfAbsent=true"
                    alt="Policy Information 1"
                    className="object-contain mt-10 ml-6 max-w-full aspect-[2.12] w-[890px]"
                  />

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6195ef0ede815fd8405e1b57811f455f2c14ef98?placeholderIfAbsent=true"
                    alt="Policy Information 2"
                    className="object-contain mt-3.5 ml-6 max-w-full aspect-[2.12] w-[890px]"
                  />

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/888b9d680c830d1268a3ad7b433507d39c326bcb?placeholderIfAbsent=true"
                    alt="Policy Information 3"
                    className="object-contain mt-3.5 ml-6 max-w-full aspect-[2.12] w-[890px]"
                  />
                </section>

                <section id="changes" className="max-md:px-2.5">
                  <PolicySection
                    title="CHANGES TO PRIVACY POLICY"
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d527b4de965766fb89512ce1cd52970732103cb1?placeholderIfAbsent=true"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d8766c9aadfaa6bdc1cc63d45ccd9c50687c9a1?placeholderIfAbsent=true"
                    alt="Policy Review Information"
                    className="object-contain mt-6 ml-7 max-w-full aspect-[90.91] w-[895px]"
                  />

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d927875f713e7146e51d42ca6ade9ada0c3624f5?placeholderIfAbsent=true"
                    alt="Additional Policy Information"
                    className="object-contain mt-20 ml-7 max-w-full aspect-[5.03] w-[765px] max-md:mt-10"
                  />

                  <div className="overflow-hidden px-16 py-2 mt-16 ml-3.5 max-w-full text-lg font-medium leading-none bg-stone-50 text-neutral-600 w-[869px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <span className="text-red-600">** </span>Amendments shall be submitted
                    for Board approval and implemented prospectively
                  </div>

                  <div className="flex overflow-hidden relative flex-col px-16 pt-96 pb-28 mt-20 ml-3.5 max-w-full text-lg font-medium min-h-[557px] shadow-[0px_2px_13px_rgba(0,0,0,0.16)] w-[868px] max-md:px-5 max-md:py-24 max-md:mt-10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6dd492ed066ed60df8a130ab43546e6b26d85d8?placeholderIfAbsent=true"
                      alt="Background"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex overflow-hidden relative flex-wrap gap-4 px-3.5 pt-2.5 pb-6 mb-0 bg-red-100 max-md:mb-2.5">
                      <span className="self-start leading-none text-red-600">**</span>
                      <p className="flex-auto leading-7 text-neutral-600 w-[641px] max-md:max-w-full">
                        For complex cases, users will be notified of any delay and
                        informed of the extended resolution timeline.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="grievance" className="max-md:px-2.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/febcced22eb3915cffdbcec67503a420fd67cce6?placeholderIfAbsent=true"
                    alt="Grievance Officer Contact Information"
                    className="object-contain mt-8 ml-3.5 max-w-full rounded-2xl aspect-[3.05] shadow-[0px_1px_16px_rgba(0,0,0,0.25)] w-[868px] max-md:mt-10"
                  />
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function DataSecuritySection() {
  return (
    <>
      <h3 className="mt-14 text-xl font-semibold leading-tight text-sky-700 max-md:mt-10">
        Encryption
      </h3>
      <p className="ml-14 text-base font-medium leading-loose text-neutral-600">
        Secure encryption of data in transit and at rest.
      </p>

      <div className="z-10 self-start mt-1 w-full max-w-[1104px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[56%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f2611b35803e965a605ad8719de3e2211c7b0ea?placeholderIfAbsent=true"
              alt="Encryption Illustration"
              className="object-contain grow w-full rounded-full aspect-[1.1] max-md:max-w-full"
            />
          </div>
          <div className="ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start mt-16 text-xl font-semibold leading-tight text-sky-700 max-md:mt-10 max-md:max-w-full">
              <h3>Access Management</h3>
              <p className="text-base font-medium leading-loose text-neutral-600">
                Role-based access and multi-factor authentication.
              </p>

              <div className="flex flex-col self-stretch pl-14 mt-32 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <h3 className="self-start ml-6 max-md:ml-2.5">
                  IT Security Infrastructure
                </h3>
                <p className="self-end text-base font-medium leading-loose text-neutral-600 max-md:max-w-full">
                  Firewall protection, DDoS mitigation, malware detection.
                </p>

                <h3 className="self-start mt-36 max-md:mt-10">
                  Data Center Security
                </h3>
                <p className="mr-11 text-base font-medium leading-loose text-neutral-600 max-md:mr-2.5">
                  Physical security and surveillance at server locations.
                </p>
              </div>

              <h3 className="mt-20 max-md:mt-10">Monitoring</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-8 max-w-full w-[777px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[27%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d14eb51e7b8d977c20b0e2b9d497fb8ffbd47c1?placeholderIfAbsent=true"
              alt="Monitoring Illustration"
              className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[1.89] w-[198px] max-md:mt-10"
            />
          </div>
          <div className="ml-5 w-[73%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base font-medium leading-loose text-neutral-600 max-md:mt-8 max-md:max-w-full">
              <p className="self-end">
                Regular audits, log analysis, and breach simulations.
              </p>

              <h3 className="self-start mt-16 text-xl font-semibold leading-tight text-sky-700 max-md:mt-10">
                Training
              </h3>
              <p className="max-md:mr-2.5 max-md:max-w-full">
                Staff awareness programs and mandatory confidentiality
                obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicyPage;
