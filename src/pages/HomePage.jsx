import React from "react";

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-10">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Marketplace
          </h2>
          <p className="text-lg text-gray-600">
            Discover a wide range of products from various categories. Find the
            best deals and connect with sellers.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Wide Variety of Products
            </h3>
            <p className="text-gray-600">
              Explore electronics, fashion, home appliances, and more. Our
              marketplace offers something for everyone.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Trusted Sellers
            </h3>
            <p className="text-gray-600">
              We ensure that all sellers on our platform are verified and
              trustworthy, providing you with a safe shopping experience.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Best Deals
            </h3>
            <p className="text-gray-600">
              Get the best deals on a wide range of products. Our marketplace is
              designed to help you save money on your purchases.
            </p>
          </div>
        </section>

        <section className="text-center my-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Sign up today and start exploring our vast marketplace. Connect with
            sellers, find great deals, and enjoy a seamless shopping experience.
          </p>
          <a
            href="/api/product/register"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Get Started
          </a>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
