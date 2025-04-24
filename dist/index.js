import { executePythonAnalysis } from './python';
import { commitAndPush } from './git';
import * as fs from 'fs/promises';
async function main(projectPath = process.cwd()) {
    console.log('=== Python Script Runner ===');
    const scriptPath = './scripts/analyze.py';
    const inputFile = './data/input.csv';
    const outputFile = './data/output.json';
    console.log('Running Python analysis...');
    const result = await executePythonAnalysis(scriptPath, inputFile);
    console.log('Analysis Result:', result.output);
    await fs.writeFile(outputFile, JSON.stringify(result, null, 2));
    console.log(`Saved output to ${outputFile}`);
    console.log('Committing results to Git...');
    await commitAndPush(projectPath, 'Add Python analysis results');
    console.log('Results committed and pushed.');
}
main('./pythonScript_writer').catch((err) => console.error('error:', err));
//# sourceMappingURL=index.js.map