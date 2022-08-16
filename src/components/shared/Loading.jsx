import React from 'react'

export default function Loading() {
  return (
    <div>
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            style={{ width: 75, height: 75 }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
    </div>
  )
}
