function VideoAutomationPreview() {
  const videoAutomationUrl = process.env.NEXT_PUBLIC_VIDEO_MAKER_URL

  return (
    <div className="mt-40 flex h-225 w-full items-center justify-center overflow-hidden p-4">
      <iframe className="h-full w-full rounded-xl" src={videoAutomationUrl} />
    </div>
  )
}

export default VideoAutomationPreview
