import React from "react"

export default class Search extends React.Component
{
  render()
  {
    return(
      <div>
    <input type="text" onChange={this.props.onChange} />
    </div>
  )
  }
}
//itemSearch(event)
