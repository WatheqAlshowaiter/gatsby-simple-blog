module.exports = {
  tHome: 'الرئيسية',
  tRelativePosts: 'المقالات المشابهة',
  tFollowTwitterDescription: 'يجب أن تتابعه على تويتر',
  tTags: 'وسوم',
  tIndTitle: 'كل المقالات',
  taIndKeywords: [`مدونة`, `gatsby`, `javascript`, `react`],
  tfIndCountPosts: ({ count, from, to }) => `${count} Posts (${from} - ${to})`,
  tfTagHeader: (totalCount, tag) =>
    `المقالات الموسومة بالوسم: "${tag}"`,
  t404Title: 'صفحة غير موجودة',
  t404Content: 'للأسف، لقد وصلت لصفحة غير موجودة أو حُدّثت.',
};
