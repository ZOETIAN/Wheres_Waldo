.global _start
_start:

# socket(AF_INET6,SOCK_STREAM | SOCK_NONBLOCK,0);
mov $41, %rax
mov $10, %rdi
mov $1, %rsi
syscall

# bind(%rax,sockaddr_in6,24);
mov %rax, %rdi
mov $49, %rax
mov %rax, %rbx
mov $Lsockaddr_in6, %rsi
mov $24, %rdx
syscall

# listen(%rdi,256);
mov %rbx, %rax
incq %rax
mov $256, %rsi
syscall

mov $288, %rbx
incq %rbp
mov $Lhttp_headers, %r9
mov $Lhttp_end-Lhttp_headers, %r13
mov %rdi, %r8
mov $3, %r12

event_loop:

# accept4(%rdi,NULL,24,0);
mov %rbx, %rax
mov %r8, %rdi
mov %r14, %rsi
mov %r14, %rdx
syscall

# write(%rax,http_headers,http_end-http_headers);
mov %rax, %rdi
mov %rbp, %rax
mov %r9, %rsi
mov %r13, %rdx
syscall

# close(%rdi)
mov %r12, %rax
syscall

jmp event_loop

Lsockaddr_in6:
.short 10
# port
.byte 0
.byte 80
# flowinfo
.long 0
# address
.quad 0
.quad 0
# netdevice / interface
.long 0

Lhttp_headers:
.ascii "HTTP/1.1 200 OK\r\n"
.ascii "Content-Type: text/html\r\n"
.ascii "Content-Length: 5598\r\n"
.ascii "Connection: close\r\n"

.ascii "\r\n"

Lhttp_payload:
.incbin "../index.html"
.ascii "<script>"
.incbin "../main.js"
.ascii "</script>"

.ascii "\r\n\r\n"
Lhttp_end:
