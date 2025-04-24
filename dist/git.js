import { runCommand } from './childProcess';
export async function commitAndPush(projectPath, message) {
    const execGit = async (cmd) => runCommand(`cd ${projectPath} && ${cmd}`);
    await execGit('git add .');
    await execGit(`git commit -m "${message}"`);
    return execGit('git push origin main ');
}
//# sourceMappingURL=git.js.map