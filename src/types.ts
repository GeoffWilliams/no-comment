export type JsonComment = {
    _id: string,
    name: string,
    email: string,
    message: string,
    date: number,
};

export enum EnvironmentVariables {
    GITHUB_TOKEN = "GITHUB_TOKEN",
    GITHUB_OWNER = "GITHUB_OWNER",
    GITHUB_REPO = "GITHUB_REPO",
    GITLAB_TOKEN = "GITLAB_TOKEN",
    GITLAB_URL = "GITLAB_URL",
    GITLAB_PROJECT_ID = "GITLAB_PROJECT_ID",
    GIT_AUTHOR = "GIT_AUTHOR",
    GIT_EMAIL = "GIT_EMAIL",
    GIT_BRANCH_TO_MERGE_INTO = "GIT_BRANCH_TO_MERGE_INTO",
    COMMENT_DIR = "COMMENT_DIR",
    PROVIDER = "PROVIDER",
    AKISMET_ENABLED = "AKISMET_ENABLED",
    AKISMET_BLOG_URL = "AKISMET_BLOG_URL",
    AKISMET_API_KEY = "AKISMET_API_KEY",
    AKISMET_TEST_MODE = "AKISMET_TEST_MODE",
}