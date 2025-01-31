import './style.css'
import { exec, toast } from 'kernelsu';

const template = document.getElementById('app-template').content;
const appsList = document.getElementById('apps-list');
const save_list = [];

// const exec = async (command) => {
//   console.log(`Executing command: ${command}`); // Log perintah
//   // Simulasi hasil eksekusi
//   return {
//     errno: 0, // Anggap tidak ada error
//     stdout: `Simulated output for: ${command}`, // Output simulasi
//   };
// };

async function run(cmd) {
	const { errno, stdout, stderr } = await exec(cmd);
	if (errno != 0) {
		toast(`stderr: ${stderr}`);
		return undefined;
	} else {
		return stdout;
	}
}

function sortChecked() {
	[...appsList.children]
		.sort((a, _b) => a.querySelector('.checkbox').checked ? -1 : 1)
		.forEach(node => appsList.appendChild(node));
}

function populateApp(name, checked) {
	const node = document.importNode(template, true);
	node.querySelector('.name').textContent = name;
	const checkbox = node.querySelector('.checkbox');
	checkbox.checked = checked;
	if (checked) save_list.push(name);
	checkbox.addEventListener('change', () => {
		if (checkbox.checked) {
			save_list.push(name);
		} else {
			const i = save_list.indexOf(name);
			if (i !== -1) save_list.splice(i, 1);
		}
	});
	appsList.appendChild(node);
}

async function main() {
	const pkgs = await run("pm list packages");
  //const pkgs = "package:1\npackage:2\npackage:3\npackage:4\npackage:5\npackage:6\npackage:7\npackage:8\npackage:9\npackage:0\npackage:10\npackage:11\npackage:12\npackage:13\npackage:15\npackage:14\npackage:17"

	if (pkgs === undefined) return;

	const saved_list = await run("cat /data/encore/gamelist.txt");
  //const saved_list = ""
	if (saved_list === undefined) return;
	const saved = saved_list ? saved_list.split('\n') : [];
	const uninstalled = saved ? [...saved] : [];
	for (const pkg of pkgs.split('\n').map((line) => line.split(':')[1])) {
		const incls = saved.includes(pkg);
		populateApp(pkg, incls);
		if (incls) {
			const index = uninstalled.indexOf(pkg);
			if (index > -1) uninstalled.splice(index, 1);
		}
	}
	for (const pkg of uninstalled) populateApp(pkg, true);
	sortChecked();

	document.getElementById("search").addEventListener('input', (e) => {
		if (!e.target.value) {
			sortChecked();
			return;
		};
		const searchVal = e.target.value.toLowerCase();
		[...appsList.children]
			.sort((a, _b) => a.querySelector('.name').textContent.toLowerCase().includes(searchVal) ? -1 : 1)
			.forEach(node => appsList.appendChild(node));
	});

	document.getElementById("saveButton").addEventListener('click', (e) => {
		const gamelist = save_list.join('/');
    run(`encore-utils save_gamelist "${gamelist}"`);
    toast('Gamelist saved successfully.');
	});
}

document.addEventListener('DOMContentLoaded', async (event) => {
  await main();
})