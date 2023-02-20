import "@testing-library/react";
import { AppStore, createAppStore } from "../core/store";
import { fetchAllPosts } from "../core/store/Posts.store";

jest.mock("rospiel-react_alganews-sdk", () => ({
  PostService: {
    getAllPosts: () => ({
      page: 2,
      size: 9,
      totalPages: 15,
      totalElements: 442,
      content: [
        {
          id: 1,
          slug: "",
          title: "",
          imageUrls: {
            default: "",
            small: "",
            medium: "",
            large: "",
          },
          editor: {
            id: 1,
            name: "",
            avatarUrls: {
              default: "",
              small: "",
              medium: "",
              large: "",
            },
            createdAt: "",
          },
          createdAt: "",
          updatedAt: "",
          published: true,
          tags: ["JavaScript"],
          canBePublished: true,
          canBeUnpublished: true,
          canBeDeleted: true,
          canBeEdited: true,
        },
      ],
    }),
  },
}));

let store: AppStore;

describe("Posts store", () => {
  beforeEach(() => {
    store = createAppStore();
  });

  it("start with empty array on content", () => {
    const state = store.getState().posts;
    expect(state.posts.content).toHaveLength(0);
  });

  it("updates state after fetchAllPosts dispatch", async () => {
    await store.dispatch(fetchAllPosts({}));
    const state = store.getState().posts;
    expect(state.posts.content?.length).toBeGreaterThanOrEqual(1);
  });
})

