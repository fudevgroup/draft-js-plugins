import React from 'react'
import "./aparatStyle.css"

function AparatVideoComponent({src}:{src: string}) {
  return (
    <div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe
    src={src} allowFullScreen="true"
    webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>
  )
}

export default AparatVideoComponent