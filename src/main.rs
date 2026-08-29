use axum::Router;
use tower_http::services::ServeDir;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .fallback_service(ServeDir::new("static"));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    println!("🚀 Servidor corriendo en http://localhost:3000");
    println!("🦀 Presiona Ctrl+C para detener");

    axum::serve(listener, app).await.unwrap();
}
