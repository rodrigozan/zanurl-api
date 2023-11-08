import { Connection } from '../database/Connection';
import UrlModel from '../models/UrlConverterModel'

export class UrlConverterService {
    // Método para conectar ao banco de dados
    static async initialize() {
        await Connection.connect();
    }

    // Método para salvar a URL e a URL convertida
    static async saveUrl(originalUrl: string, convertedUrl: string) {
        try {
            await this.initialize();
            
            const urlEntry = new UrlModel({ originalUrl, convertedUrl });
            await urlEntry.save();
            console.log('URL saved successfully');
        } catch (error) {
            console.error('Error saving the URL', error);
        } finally {
            await this.terminate();
        }
        
    }

    // Método para buscar as URLs
    static async findUrl(id: string) {
        let urls;
        try {
            // Aqui você deve conectar ao banco, se ainda não estiver conectado
            await this.initialize();
            // Aqui você substituiria por sua lógica de busca no MongoDB
            urls = await UrlModel.findById(id);
            return urls;
        } catch (error) {
            console.error('Error fetching URLs', error);
            urls = null;
        } finally {
            await this.terminate();
        } 
        return urls;
    }
    

    // Método para desconectar do banco de dados
    static async terminate() {
        await Connection.disconnect();
    }
}
