"use server"

export async function postCreate(topicSlug: string) {
  // TODO: revalidate topic show page

  return `/topics/${topicSlug}/posts/new`;
}