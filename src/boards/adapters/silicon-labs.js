Board.adapters.push({
	"id" : "Silicon Labs",
	"MacIntel": {
		"path": /tty\.SLAB_USBtoUART/,
		"displayName": /CP210x USB to UART.*/
	},
	"Win32": {
		"path": /COM\d+/,
		"displayName": /CP210x USB to UART.*/
	},
	"Linux x86_64": {
		"path": /\/dev\/ttyUSB\d+/,
		"displayName": /CP2102_USB_to_UART.*/
	},
});
