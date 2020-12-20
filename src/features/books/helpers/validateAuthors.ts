export const validateAuthors = (authors: string[] | undefined) =>
  authors?.length ? authors.join(', ') : 'No author data';
