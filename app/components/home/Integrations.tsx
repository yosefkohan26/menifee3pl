import { FaShopify, FaWordpress, FaMagento, FaShoppingCart, FaAmazon, FaEbay } from 'react-icons/fa'

const integrations = [
  { name: "Shopify", icon: FaShopify },
  { name: "WooCommerce", icon: FaWordpress },
  { name: "Magento", icon: FaMagento },
  { name: "BigCommerce", icon: FaShoppingCart },
  { name: "Amazon", icon: FaAmazon },
  { name: "eBay", icon: FaEbay },
]

const Integrations = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">Seamless Integrations</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Menifee 3PL integrates with all major e-commerce platforms, ensuring a smooth and efficient fulfillment process for your business.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md">
                <integration.icon className="text-4xl mb-2" />
                <span className="text-sm">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Integrations
