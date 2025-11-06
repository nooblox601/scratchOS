(function() {
  alert("✅ scratchOS Helper: arquivo carregado com sucesso!");
  
  class ScratchOSHelper {
    getInfo() {
      return {
        id: 'scratchoshelper',
        name: 'scratchOS Helper',
        blocks: [
          {
            opcode: 'boot',
            blockType: 'command',
            text: 'start boot sequence'
          },
          {
            opcode: 'toast',
            blockType: 'command',
            text: 'show toast [TEXT]',
            arguments: {
              TEXT: { type: 'string', defaultValue: 'Hello!' }
            }
          }
        ]
      };
    }

    boot() {
      alert("🖥️ scratchOS: boot iniciado!");
    }

    toast(args) {
      alert("🔔 Toast: " + args.TEXT);
    }
  }

  // Registra a extensão
  if (typeof Scratch !== "undefined" && Scratch.extensions) {
    Scratch.extensions.register(new ScratchOSHelper());
    alert("⚙️ scratchOS Helper registrada com sucesso!");
  } else {
    alert("❌ Falha: objeto Scratch.extensions não encontrado!");
  }
})();

