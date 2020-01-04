import { list, listByWebDevelopment } from "./apiPost";

export const loadPosts = page => {
  list(page).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      this.setState({ posts: data });
    }
  });
};

