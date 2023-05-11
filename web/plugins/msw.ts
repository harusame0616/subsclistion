export default defineNuxtPlugin(async () => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'test') {
    const { worker } = await import('~/mocks/browser');
    worker.start();
  } else {
    const { server } = await import('~/mocks/node');
    server.listen();
  }
});
