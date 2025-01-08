import React from 'react'

function Messages() {
  return (
    <div>
      <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <div className="text-xl font-medium text-black">Messages</div>
        <div className="space-y-2">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">Hello! How are you?</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">I'm good, thank you! How about you?</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">I'm doing well, thanks for asking!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages