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
    GIT_AUTHOR = "GIT_AUTHOR",
    GIT_EMAIL = "GIT_EMAIL",
    GIT_BRANCH_TO_MERGE_INTO = "GIT_BRANCH_TO_MERGE_INTO",
    COMMENT_DIR = "COMMENT_DIR",
}