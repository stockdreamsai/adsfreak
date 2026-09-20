export default function DemoSection() {
  return (
    <section className={"section dark demo-section"}>
      <div className={"narrow center reveal container"}>
        <div className={"section-label"}>
          Demo
        </div>
        <h2>
          Watch The Freak In Action
        </h2>
        <p className={"subheadline"}>
          
                    See Social Ads Freak clone, rebuild, and launch a real ad —
                    step by step.
                
        </p>
        <div className={"video-wrapper demo-video"}>
          <div style={{"padding": "75% 0 0 0", "position": "relative"}}>
            <iframe src={"https://player.vimeo.com/video/1178809437?h=4ce86e0558&badge=0&autopause=0&player_id=0&app_id=58479"} frameBorder={"0"} loading={"lazy"} allow={"\n                                autoplay;\n                                fullscreen;\n                                picture-in-picture;\n                                clipboard-write;\n                                encrypted-media;\n                                web-share;\n                            "} referrerPolicy={"strict-origin-when-cross-origin"} style={{"position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%"}} title={"Social Ads Freak Demo"}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
