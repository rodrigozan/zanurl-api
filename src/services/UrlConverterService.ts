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
            // Aqui você deve conectar ao banco, se ainda não estiver conectado
            await this.initialize();
            // Aqui você substituiria por sua lógica de inserção no MongoDB
            const urlEntry = new UrlModel({ originalUrl, convertedUrl });
            await urlEntry.save();
            console.log('URL saved successfully');
        } catch (error) {
            console.error('Error saving the URL', error);
        }
        await this.terminate();
    }

    // Método para buscar as URLs
    static async findUrls() {
        try {
            // Aqui você deve conectar ao banco, se ainda não estiver conectado
            await this.initialize();
            // Aqui você substituiria por sua lógica de busca no MongoDB
            const urls = await UrlModel.find();
            return urls;
        } catch (error) {
            console.error('Error fetching URLs', error);
        }
        await this.terminate();
    }

    // Método para desconectar do banco de dados
    static async terminate() {
        await Connection.disconnect();
    }
}
