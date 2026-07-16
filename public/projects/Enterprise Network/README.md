# Multi-VLAN Enterprise Network (OSPF Routing)

Welcome to the **Multi-VLAN Enterprise Network** project repository. This project was developed as a hands-on implementation for the Semester 1 **Advanced Network** course at **El Sewedy University of Technology (SUT)**.

The project demonstrates the planning, design, security segmentation, routing configuration, and verification of a complex enterprise network architecture.

---

## 🚀 Project Overview

This project implements a secure, scalable, and dynamic enterprise network topology using Cisco Packet Tracer. Key design highlights include:

*   **Network Scale**: Spans **22 VLANs**, **44 endpoints**, **5 routers**, and **5 switches** to simulate a realistic department-based enterprise structure.
*   **VLAN Segmentation**: Applied strict VLAN boundaries across the switches to isolate broadcast domains, optimize performance, and enhance security policies between different departments and groups.
*   **OSPF Dynamic Routing**: Configured **OSPF (Open Shortest Path First)** routing across the 5 routers to facilitate automatic route discovery, fast convergence, load balancing, and fault tolerance across the enterprise backbone.
*   **Structured Addressing**: Used custom VLSM subnetting calculations to allocate IP addresses efficiently across all WAN links and 22 VLAN subnets.

---

## 📁 Project Structure

```text
PROJECT/
│
├── PROJECT.pkt                 # Cisco Packet Tracer network topology file
├── Project Design.png          # Visual representation/topology map of the network
├── Subnetting Code.py          # Python utility for calculating classful/VLSM subnets
│
├── Subnetting/                 # Router configuration and addressing details
│   ├── R0.jpg
│   ├── R1.jpg
│   ├── R2.jpg
│   ├── R3.jpg
│   └── R4.jpg
│
└── Pinging Router [0-4]/       # Connectivity validation screenshots per Router
    ├── Pinging Router 0/       # Ping checks initiated from or targeted at Router 0
    ├── Pinging Router 1/       # Ping checks initiated from or targeted at Router 1
    ├── Pinging Router 2/       # Ping checks initiated from or targeted at Router 2
    ├── Pinging Router 3/       # Ping checks initiated from or targeted at Router 3
    └── Pinging Router 4/       # Ping checks initiated from or targeted at Router 4
```

---

## 🛠️ Components & Technical Details

### 1. Python Subnet Calculator ([Subnetting Code.py](file:///c:/Users/omarg/OneDrive%20-%20El%20Sewedy%20University%20of%20Technology/Documents/SUT/Semester%201/Advanced%20Network/PROJECT/Subnetting%20Code.py))
A command-line tool built using Python's native `ipaddress` library to calculate subnet allocations. It supports:
*   **Subnet Bits**: Divide the network based on a specified prefix addition.
*   **Hosts Per Subnet**: Calculate required prefixes for a fixed host size.
*   **Number of Subnets**: Partition address blocks into a fixed number of networks.
*   **VLSM Allocation**: Dynamically calculate prefixes by sorting host requirements from largest to smallest, ensuring minimal IP address waste for the network's 22 VLANs.

**To run the script:**
```bash
python "Subnetting Code.py"
```

### 2. Network Topology Design (`PROJECT.pkt` / `Project Design.png`)
*   **`PROJECT.pkt`**: The Cisco Packet Tracer file containing the virtual lab with all configured switches, routers, VLAN interfaces (SVIs), subinterfaces for Router-on-a-Stick, and end-user devices.
*   **`Project Design.png`**: The architectural design blueprint illustrating physical/logical linkages and interface assignments.

### 3. Router Configuration & Verification (`Subnetting/` & `Pinging Router X/`)
*   **IP Configuration (`Subnetting/`)**: Image files (`R0.jpg` to `R4.jpg`) showing active interface configurations and subnets mapped to respective VLANs.
*   **OSPF & Connectivity Verification (`Pinging Router X/`)**: Verification logs and screenshots demonstrating successful ping results across different VLANs and routers, validating the correct configuration of OSPF dynamic routing.


