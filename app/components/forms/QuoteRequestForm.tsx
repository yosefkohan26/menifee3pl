'use client';
import { useState } from 'react'

const steps = [
  {
    title: 'Basic Information',
    fields: [
      { name: 'company', label: 'Company Name', type: 'text' },
      { name: 'name', label: 'Your Name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'phone', label: 'Phone', type: 'tel' },
    ]
  },
  {
    title: 'Service Requirements',
    fields: [
      { name: 'service', label: 'Service Type', type: 'select', options: ['3PL/4PL', 'Fulfillment', 'FBA Prep', 'Custom'] },
      { name: 'volume', label: 'Estimated Monthly Volume', type: 'number' },
      { name: 'storage', label: 'Storage Needs (in pallets)', type: 'number' },
    ]
  },
  {
    title: 'Additional Details',
    fields: [
      { name: 'specialRequirements', label: 'Special Requirements', type: 'textarea' },
      { name: 'timeline', label: 'Expected Start Date', type: 'date' },
    ]
  }
]

const QuoteRequestForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit the form data
      console.log(formData)
      // You would typically send this data to your server or a third-party service
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
      <div className="mb-8 overflow-x-auto">
        <div className="flex justify-between min-w-max">
          {steps.map((step, index) => (
            <div key={index} className={`flex-1 text-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                {index + 1}
              </div>
              <p className="mt-2 text-sm">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {steps[currentStep].fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select an option</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                rows={4}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          {currentStep < steps.length - 1 ? 'Next' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default QuoteRequestForm