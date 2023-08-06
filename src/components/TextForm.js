import React from 'react'

export default function TextForm() {
  return (
    <div>
      <form>
        <div class="mb-3">
            <label for="myTextBox" class="form-label">Enter Your Text Here</label>
            <input  class="form-control" id="myTextBox"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
