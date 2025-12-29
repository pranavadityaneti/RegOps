export const toSlug = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/--+/g, '-')     // Replace multiple - with single -
        .trim();
};

export const fromSlug = (slug: string, sourceList: string[]): string | undefined => {
    return sourceList.find(item => toSlug(item) === slug);
};
