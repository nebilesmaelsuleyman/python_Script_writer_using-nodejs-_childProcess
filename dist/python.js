import { runPythonScript } from './childProcess';
export async function executePythonAnalysis(scriptPath, inputFile) {
    const output = await runPythonScript(scriptPath, [inputFile]);
    return {
        output,
        timestamp: new Date().toISOString(),
    };
}
//# sourceMappingURL=python.js.map