'use client';
import { useState, useEffect } from 'react'

const PricingCalculator = () => {
  const [service, setService] = useState('storage')
  const [pallets, setPallets] = useState(0)
  const [days, setDays] = useState(0)
  const [items, setItems] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [breakdown, setBreakdown] = useState<string[]>([])
  const [fbaPrep, setFbaPrep] = useState(false)

  useEffect(() => {
    calculatePrice()
  }, [service, pallets, days, items, fbaPrep])

  const calculatePrice = () => {
    let cost = 0
    let breakdownItems: string[] = []

    if (service === 'storage') {
      let storageRate = 1.00 // Base rate for 1-24 pallets
      if (pallets >= 25 && pallets <= 100) {
        storageRate = 0.85
      } else if (pallets > 100) {
        storageRate = 0.75 // Assuming a lower rate for 100+ pallets
      }
      const storageCost = pallets * days * storageRate
      cost += storageCost
      breakdownItems.push(`Storage: $${storageCost.toFixed(2)} (${pallets} pallets for ${days} days at $${storageRate}/pallet/day)`)

      const inOutFee = pallets * 6 * 2 // $6 in and $6 out
      cost += inOutFee
      breakdownItems.push(`In/Out Fee: $${inOutFee.toFixed(2)} ($6 per pallet each way)`)

      if (pallets >= 25 && pallets <= 100) {
        const volumeDiscount = pallets * 5.50
        cost -= volumeDiscount
        breakdownItems.push(`Volume Discount: -$${volumeDiscount.toFixed(2)} ($5.50 per pallet for 25-100 pallets)`)
      }
    } else if (service === 'fulfillment') {
      const labelingFee = items * 0.50
      const pickAndPackFee = items * 1.00
      cost = labelingFee + pickAndPackFee
      breakdownItems.push(`Labeling Fee: $${labelingFee.toFixed(2)} ($0.50 per item)`)
      breakdownItems.push(`Pick and Pack Fee: $${pickAndPackFee.toFixed(2)} ($1.00 per item)`)

      if (fbaPrep) {
        const fbaPreparationFee = items * 1.00
        cost += fbaPreparationFee
        breakdownItems.push(`FBA Preparation: $${fbaPreparationFee.toFixed(2)} ($1.00 per item)`)
      }
    }

    setTotalCost(Number(cost.toFixed(2)))
    setBreakdown(breakdownItems)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Cost Calculator</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Service Type</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="storage">Storage</option>
          <option value="fulfillment">Fulfillment</option>
        </select>
      </div>
      {service === 'storage' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Number of Pallets</label>
            <input
              type="number"
              value={pallets}
              onChange={(e) => setPallets(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Number of Days</label>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}
      {service === 'fulfillment' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Number of Items</label>
            <input
              type="number"
              value={items}
              onChange={(e) => setItems(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-gray-700 font-semibold">
              <input
                type="checkbox"
                checked={fbaPrep}
                onChange={(e) => setFbaPrep(e.target.checked)}
                className="mr-2"
              />
              Include FBA Prep
            </label>
          </div>
        </>
      )}
      <div className="mt-6">
        <h4 className="text-xl font-semibold mb-2">Estimated Cost</h4>
        <p className="text-3xl font-bold text-blue-600">${totalCost}</p>
        <div className="mt-4">
          <h5 className="font-semibold mb-2">Breakdown:</h5>
          <ul className="list-disc list-inside">
            {breakdown.map((item, index) => (
              <li key={index} className="text-sm text-gray-600">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {pallets > 100 && (
        <div className="mt-6 bg-blue-100 p-4 rounded-md">
          <p className="text-sm text-blue-800">
            For storage of 100+ pallets, please contact us for custom volume pricing.
          </p>
        </div>
      )}
      <div className="mt-6 text-sm text-gray-600">
        <p>Note: This calculator provides an estimate. Actual costs may vary based on specific requirements and volume discounts.</p>
        <p className="mt-2">For enterprise customers and large volume orders, please contact us for custom pricing.</p>
      </div>
    </div>
  )
}

export default PricingCalculator
