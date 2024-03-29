✨:tada: _First of all, thanks for taking the time to contribute!_ :tada:✨

---

## Contributing Guidelines 📌📌
- Issues will be assigned on a **first come, first serve basis**. You just have to comment on the issue, asking to be assigned, and we'll assign it to you if it's not assigned to anyone else.

- If you find any **bug** or **feature**, create an issue accordingly, and please wait for it to be **assigned to you**.
- It would be even better if you can visually show a **prototype/animation/design** for any UI improvements you are going to do so that the probability of major changes after writing the code decreases.
- Before creating a Pull Request, please make sure you have **pull the code from origin**, so that **merge conflicts can be prevented.**
- Please remove any **`console logs or errors`** if present in the code(for the sake of debugging), before creating a Pull Request.
- Please write some **comments in the modified section of the code**, so that others can understand you logic and code more easily. 
---

### ⁉️ Did you find a bug/Issue or an new Feature?, Feel free to submit issues and enhancement requests.

In general, we follow the "fork-and-pull" Git workflow.

---

### ✅<mark>Following are the steps for Creating Issue -</mark>

### For creating new issue, select any one of the ISSUE TEMPLATE and describe along with its fields given (\_rather than opening a blank issue*) :

- Bug Report 🐛
- Feature Request 🌟

---

### ✅<mark>Following are the steps/rules for Contributing in the project -</mark>

1.  _**Fork**_ the repository on GitHub.

2.  _**Clone**_ the project (forked copy of the project) to your machine :

    `git clone url-of-forked-project`

3.  _**Navigate**_ to the directory of project :

    `cd Codeditor`

4. Set the _**upstream**_ with original repository :

    `git remote add upstream https://github.com/KshitijDarekar/Codeditor.git`

5. In order to check associated URLs with the project :

    `git remote -v`

6. Before commiting any changes, always _**Pull**_ the upstream so that the recents changes in the original repo gets merged (gets updated with recent changes)

    `git pull upstream master`

7. Create a _**New**_ Branch (where you need to push the changes done) and switch to the respective branch :

    `git branch your_branch_name`

    `git checkout -b your_branch_name`

8.  _**Add**_ and _**Commit**_ your changes with relevant message :

    `git add file_name`

- While commiting, ensure that you follow the below guidelines :

  - Structure of commit message :
    `git commit -m "{{ commit heading }}" -m "{{ commit desc }}"`

  - Commit Headings

    - ⚒️[Fix]: used when we do a css-fix, ui-improvement
    - 📚[Docs]: used when modifying/updating docs
    - ♻️[Refactor]: used when refactoring variables, functions, classes
    - 🐛 [Bug]: used when commits related to bug fixed/resolve in process
    - 🚀[Feat]: used when adding a new feature in application
    - 🔏 [API]: when working with API's

  - When commits are in parts Eg:
    - 🌘 [1/3] Auth: setup firebase configs
    - 🌗 [2/3] Auth: setup auth routes
    - 🌕 [3/3] Auth: finishing with auth functionalities
  - Commit Body
    - In this we can add a brief description of the modification we did in the code. So overall it would look like -
      `git commit -m "🔐[API]: Handle CORS policy" -m "Desc: added Cors libraries to access backend from the react, added whitelist 🔥"`

9.  _**Push**_ the changes to the same working branch (do not push on _origin_ _master_!)

    `git push -u origin your_branch_name`

10. To create a _**Pull request**_ ,click on compare and pull requests.

11. Add appropriate _**Title**_ and _**Description**_ explaining the work you have done.

12. And Done!! 🥳 Wait till your _**PR**_ gets merged after successful submission! 😄

---

## Happy Coding 🎯! Keep Contributing ! 🚀
