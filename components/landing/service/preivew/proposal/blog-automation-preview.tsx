function BlogAutomationPreview() {
  const blogAutomationUrl = process.env.NEXT_PUBLIC_BLOG_AUTOMATION_URL

  return (
    <div className="mt-40 flex h-300 w-full items-center justify-center p-4">
      <iframe className="h-full w-full" src={blogAutomationUrl} />
    </div>
  )
}

export default BlogAutomationPreview
