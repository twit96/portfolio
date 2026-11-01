/*
Builds a fake page object for the tags pages
to pass into the PostCollectionLayout component.
*/
export function firstPage<T>(items: T[], pageSize: number) {
  return {
    currentPage: 1,
    lastPage: Math.max(1, Math.ceil(items.length / pageSize)),
    total: items.length,
    start: 0,
    end: Math.min(items.length, pageSize) - 1,
    data: items.slice(0, pageSize),
  };
}
