import React from 'react'
export default function UserInfo(props)
{
  return (
    <div>
    <button onClick={() => props.history.goBack()}>Back</button>
      <h1>User Information</h1>
      <div>
        { props.firstname }
      </div>
      <div>
        { props.lastname }
      </div>
      <div>
        { props.email }
      </div>
      <div>
        { props.phoneNumber }
      </div>

    </div>
  )
}
