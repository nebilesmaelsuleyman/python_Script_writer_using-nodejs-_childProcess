import { exec, spawn } from 'child_process';
import { promisify } from 'util';
const execAsync = promisify(exec);
export async function runCommand(command) {
    try {
        const { stdout } = await execAsync(command);
        return stdout.trim();
    }
    catch (error) {
        throw new Error(`Command failed: ${error.message}`);
    }
}
export function runPythonScript(scriptPath, args) {
    return new Promise((resolve, reject) => {
        const process = spawn('python', [scriptPath, ...args]);
        let output = '';
        process.stdout.once('data', (data) => (output += data.toString()));
        process.stderr.on('data', (data) => console.error(`stderr:${data}`));
        process.on('close', (code) => {
            if (code == 0)
                resolve(output.trimEnd());
            else
                reject(new Error(`Python script exited with code ${code}`));
        });
    });
}
//# sourceMappingURL=childProcess.js.map