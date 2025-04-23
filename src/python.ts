import { runPythonScript } from './childProcess'

export interface PythonResult {
	output: string
	timestamp: string
}
export async function executePythonAnalysis(
	scriptPath: string,
	inputFile: string
): Promise<PythonResult> {
	const output = await runPythonScript(scriptPath, [inputFile])
	return {
		output,
		timestamp: new Date().toISOString(),
	}
}
