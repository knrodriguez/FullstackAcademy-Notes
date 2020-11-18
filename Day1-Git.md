# Git
## Distributed Version Control System
### Local
- Current repo you are inside of
> - Create gitconfig file `touch .gitconfig` in terminal
> - Edit settings for that repo in the .gitconfig file
### Global
- Applied to user in the operating system user
### System
 - Applied to all users in the operating system
### Workspace
 - Local working directory. Contains tracked files, untracked files, and a special directory ".git"
### Staging area
 - Used for preparing commits. You can add files to it for the next commit.
### Repository
 - Virtual storage of your project. It allows you to save versions of your code, which you can access when needed.

## Push
- Takes changes from computer and pushes to GitHub.

## Reset
> `git reset <optional: filename>`
- Removes all files <or just this file> from staging area, leaves it in working directory
> `git reset <commit (i.e., head~1)>`
- Removes last commit
    > `--soft`: keeps changed files
    > `--hard`: deletes changed files

## Branch
> `git branch <optional:branch-name>`
- Lists all branches and in which branch you are currenty (by the *)
- Creates a new branch with the branch-name.

## Checkout
> `git checkout <branch-name>`
- Changes to branch branch-name

## Merge
> `git merge <branch-name>`
- Merges the last commit from branch-name and creates new commit.

## Push
> ` git push <remote branch-name> <local branch-name>`
- Pushes local branch-name to remote branch-name

## Merge Conflict

## Exercises
[PairExercise.GitWorkflow](./Exercises/PairExercise.GitWorkflow)


<!--@nested-tags:git-GitHub-->
