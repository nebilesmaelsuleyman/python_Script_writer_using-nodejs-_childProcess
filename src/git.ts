import { runCommand } from './childProcess'

export async function commitAnPush(
	projectPath: string,
	message: string
): Promise<string> {
	const execGit = async (cmd: string) =>
		runCommand(`cd ${projectPath} && ${cmd}`)
	await execGit('git add .')
	await execGit(`git commit -m "${message}"`)
	return execGit('git push origin main ')
}
