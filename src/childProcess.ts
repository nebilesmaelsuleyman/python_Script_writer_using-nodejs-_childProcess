import { exec, spawn } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function runCommand(command: string): Promise<string> {
	try {
		const { stdout } = await execAsync(command)
		return stdout.trim()
	} catch (error) {
		throw new Error(`Command failed: ${(error as Error).message}`)
	}
}
export function runPythonScript(
	scriptPath: string,
	args: string[]
): Promise<string> {
	return new Promise((resolve, reject) => {
		const process = spawn('python', [scriptPath, ...args])

		let output = ''
		process.stdout.once('data', (data) => (output += data.toString()))
		process.stderr.on('data', (data) => console.error(`stderr:${data}`))
		process.on('close', (code) => {
			if (code == 0) resolve(output.trimEnd())
			else reject(new Error(`Python script exited with code ${code}`))
		})
	})
}
