const simpleGit = require('simple-git');

const fun = async (urls = [], parentBranch, childBranch) => {
    const git = simpleGit()
    try {
        let x = Math.random()
        for (let url of urls) {
            await git.init();
            await git.addRemote(`origin`, url);
            //await git.pull('origin','main')
            //await git.checkout(['main'])
            // await git.checkout(['-b', `${parentBranch}`])
            // await git.commit('s1')
            // await git.checkoutBranch(`${childBranch}`, `${parentBranch}`)
             git.push(`origin${x}`, `${childBranch}`)
        }
    }
    catch (e) { console.log(e); }
}


let = url1 = 'https://github.com/badr1002/test11.git'
let = url2 = 'https://github.com/badr1002/test1.git'
// let = url3 = 'https://github.com/badr1002/test2.git'
fun([url2], 'R5.5', 'child1')