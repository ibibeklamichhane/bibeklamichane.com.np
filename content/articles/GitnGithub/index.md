---
title: "What is Git and Github."
description: "How does git and github work."
date: "2024-02-18"
banner:
  src: "https://unsplash.com/photos/black-and-white-penguin-toy-wX2L8L-fGeA"
  alt: "First Markdown Post"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/black-and-white-penguin-toy-wX2L8L-fGeA">Florian Olivo</a></u>'
categories:
  - "Tutorial"
keywords:
  - "Git"
  - "Github"
  - "Version Control"
  - "Blog"
---

## What is a Version Control System?

What is version control? Essentially, it’s a system that allows you to record changes to files over time, thus, you can view specific versions of those files later on.

A version control system tracks the history of changes as people and teams collaborate on projects together. As the project evolves, teams can run tests, fix bugs, and contribute new code with the confidence that any version can be recovered at any time. Developers can review project history to find out:

- Which changes were made

- Who made the changes

- When were the changes made

- Why were changes needed

 ## Git

 Git is commonly used for both open source and commercial software development, with significant benefits for individuals, teams and businesses.

 Git lets developers see the entire timeline of their changes, decisions, and progression of any project in one place. From the moment they access the history of a project, the developer has all the context they need to understand it and start contributing.

 # What’s a repository?

 A repository encompasses the entire collection of files and folders associated with a project, along with each file’s revision history. The file history appears as snapshots in time called commits, and the commits exist as a linked-list relationship, and can be organised into multiple lines of development called branches. Because Git is a DVCS, repositories are self-contained units and anyone who owns a copy of the repository can access the entire codebase and its history. Using the command line or other ease-of-use interfaces, a git repository also allows for: interaction with the history, cloning, creating branches, committing, merging, comparing changes across versions of code, and more.

# Basic Git commands

```git init``` : This command initializes a new Git repository in  your project folder.This is the first step in the process of tracking your git history in other words it is the first step in the process of using the version control in your project.

```git clone``` : This command creates a new Git repository on your local machine from an existing one on GitHub.It creates a copy of the existing repository in the git

```git status```: shows the status of changes as untracked, modified, or staged.

```git add```:stages a change. Git tracks changes to a developer’s code base, but it’s necessary to stage and take a snapshot of the changes to include them in the project’s history. This command performs staging, the first part of that two-step process. Any changes that are staged will become a part of the next snapshot and a part of the project’s history.

```git commit```:saves the snapshot to the project history and completes the change-tracking process.Anything that’s been staged with git add will become a part of the snapshot with git commit

```git branch```: shows the branches being worked on locally.

```git stash```:When ever you are working on a certain branch,to implement a feature and then you need to go to another branch and checkout a feature,during this process to ensure the work you have done not be lost ,we need something this is where this command comes handy it temporarily store your changes and you can explore your quick workflow and return back.You can use ```stash apply``` and then boom you are back to where you left

```git merge```: merges lines of development together. This command is typically used to combine changes made on two distinct branches.When two developers are working in two different features in their respective branches this "git merge "helps to merge the two branches works together in a single main branch.

```git pull```: Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment,this reduces the error when we are merging the two banches and reduce the conflicts.

```git push```:Updates the remote repository with any commits made locally to a branch.

# The GitHub flow
The GitHub flow has six steps, each with distinct benefits when implemented:

- **Create a branch**: Topic branches created from the canonical deployment branch (usually master) allow teams to contribute to many parallel efforts. Short-lived topic branches, in particular, keep teams focused and results in quick ships.

- **Add commits**:Snapshots of development efforts within a branch create safe, revertible points in the project’s history.

- **Open a pull request**:Pull requests publicize a project’s ongoing efforts and set the tone for a transparent development process.

- **Merge**:Upon clicking merge, GitHub automatically performs the equivalent of a local ‘git merge’ operation. GitHub also keeps the entire branch development history on the merged pull request.

- **Deploy**:Teams can choose the best release cycles or incorporate continuous integration tools and operate with the assurance that code on the deployment branch has gone through a robust workflow.

